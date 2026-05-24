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
    const today = dayjs().startOf('day')

    const daysPassed = today.diff(birthday.startOf('day'), 'days')

    const month = birthday.format('MM')
    const day = birthday.format('DD')
    let nextBirthday = dayjs(`${today.year()}-${month}-${day}`).startOf('day')
    if (nextBirthday.diff(today, 'days') < 0) {
      nextBirthday = nextBirthday.add(1, 'year')
    }

    const daysUntil = nextBirthday.diff(today, 'days')
    const weeksRemaining = Math.floor(daysUntil / 7)

    const parts = []

    if (daysUntil === 0) {
      parts.push('Wszystkiego najlepszego!')
    } else {
      parts.push(`Od Twojej daty urodzenia minęło ${daysPassed} dni.`)
    }

    if (daysUntil !== 0) {
      if (weeksRemaining === 0) {
        parts.push('Masz urodziny w tym tygodniu!')
      } else {
        parts.push(`Pozostało ${weeksRemaining} tygodni do następnych urodzin.`)
      }
    }

    if (ageMessage) {
      ageMessage.innerHTML = parts.join('<br/>')
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

