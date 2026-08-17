import { test, expect } from '@playwright/test'

test('user directory - real API integration', async ({ page }) => {
  let data
  let firstUserName

  await test.step('loads the dashboard with real API data', async () => {
    const responsePromise = page.waitForResponse((res) => res.url().includes('randomuser.me/api'))
    await page.goto('/')
    const response = await responsePromise
    data = await response.json()

    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible()
    await expect(page.getByTestId('user-name').first()).toBeVisible()
  })

  await test.step('API response has the fields the app depends on', async () => {
    expect(data.results.length).toBeGreaterThan(0)
    expect(data.results[0]).toHaveProperty('name')
    expect(data.results[0]).toHaveProperty('email')
    expect(data.results[0].login).toHaveProperty('uuid')
  })

  await test.step('first user in API response matches first user shown in UI', async () => {
    const firstApiName = `${data.results[0].name.first} ${data.results[0].name.last}`
    firstUserName = await page.getByTestId('user-name').first().textContent()
    expect(firstUserName).toBe(firstApiName)
  })

  await test.step('clicking the first user navigates to their matching detail page', async () => {
    await page.getByText(firstUserName, { exact: true }).click()
    await expect(page.getByText(firstUserName)).toBeVisible()
  })

  await test.step('back link returns to the directory', async () => {
    await page.getByRole('link', { name: 'Back to directory' }).click()
    await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible()
  })
})
