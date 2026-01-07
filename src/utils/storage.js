const KEY = "lotus-progress"

export const load = () =>
  JSON.parse(localStorage.getItem(KEY)) || {
    stage: "mud",
    completions: {}
  }

export const save = (data) =>
  localStorage.setItem(KEY, JSON.stringify(data))