export const setLocalStorage = (tasks, filter) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("filter", JSON.stringify(filter));
};

export const getLocalStorage = () => {
  const tasksInStorage = JSON.parse(localStorage.getItem("tasks")?.toString());
  const filterInStorage = JSON.parse(
    localStorage.getItem("filter")?.toString()
  );

  return { tasksInStorage, filterInStorage };
};
