import dayjs from 'dayjs'

const birthdayPicker = document.querySelector('#birthday-picker')
const ageDialog = document.querySelector('#age-dialog')
const ageMessage = document.querySelector('#age-message')
const closeDialog = document.querySelector('#close-dialog')
const calculateBtn = document.querySelector('#calculate-age')

if (birthdayPicker) {
  const today = dayjs().format('YYYY-MM-DD')
  birthdayPicker.max = today
}

if (calculateBtn) {
  calculateBtn.addEventListener('click', () => {
    const value = birthdayPicker.value
    if (!value) {
      return
    }

    const birthday = dayjs(value)
    const daysPassed = dayjs().diff(birthday, 'days')
    let message = `Od Twojej daty urodzenia minęło ${daysPassed} dni.`

    if (daysPassed === 0) {
      message = `Wszystkiego najlepszego! Dziś masz urodziny! ${message}`
    }

    if (ageMessage) {
      ageMessage.textContent = message
    }

    if (ageDialog) {
      ageDialog.showModal()
    }
  })
}

if (closeDialog) {
  closeDialog.addEventListener('click', () => {
    ageDialog?.close()
  })
}

