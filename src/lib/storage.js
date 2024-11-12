export const setLocalStorage = (tasks, filter) => {
  // Assurez-vous que localStorage est disponible et non vidé
  if (typeof window !== "undefined" && window.localStorage) {
    // Vérifiez si les données sont différentes avant de les enregistrer
    const tasksData = JSON.stringify(tasks)
    const filterData = JSON.stringify(filter)

    localStorage.setItem("tasks", tasksData)
    localStorage.setItem("filter", filterData)
  }
}

export const getLocalStorage = () => {
  let tasksInStorage = []
  let filterInStorage = "all"

  // Vérifiez la présence du localStorage
  if (typeof window !== "undefined" && window.localStorage) {
    // Récupérez les données avec un contrôle pour les valeurs nulles
    tasksInStorage = JSON.parse(localStorage.getItem("tasks")) || []
    filterInStorage = JSON.parse(localStorage.getItem("filter")) || "all"
  }

  return { tasksInStorage, filterInStorage }
}
