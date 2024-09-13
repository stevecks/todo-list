import { ref, reactive, watch, onMounted } from 'vue'

export function useTasks() {
    const taskList = reactive([])
    const taskSortList = ref([])
    const countsOfStatuses = reactive({})
    let lastId = 0

    onMounted(() => {
        const savedTasks = localStorage.getItem('task_list')
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks)
            taskList.splice(0, taskList.length, ...parsedTasks)
        }
        const savedLastId = localStorage.getItem('last_id')
        if (savedLastId) {
            lastId = JSON.parse(savedLastId)
        }
        updateSortAndStatuse()
    })

    watch(taskList, () => {
        updateSortAndStatuse()
        saveLocalStorage()
    }, { deep: true })

    const saveLocalStorage = () => {
        localStorage.setItem('task_list', JSON.stringify(taskList))
        localStorage.setItem('last_id', JSON.stringify(lastId))
    }

    const updateSortAndStatuse = () => {
        taskSortList.value = sortTasks()
        countsOfStatuses.open = getTasksByStatus('Открыт').length
        countsOfStatuses.work = getTasksByStatus('В работе').length
        countsOfStatuses.close = getTasksByStatus('Закрыт').length
    }

    const onAddTask = (task) => {
        taskList.push({
            id: ++lastId,
            task,
            status: 'Открыт',
            updateTime: Date.now(),
        })
    }

    const onChangeTask = (taskId, newTask, newStatus) => {
        const task = taskList.find((item) => item.id === taskId)
        if (newTask) task.task = newTask
        if (newStatus) task.status = newStatus
        task.updateTime = Date.now()
    }

    const onDeleteTask = (taskId) => {
        const taskIndex = taskList.findIndex((item) => item.id === taskId)
        if (taskIndex !== -1) taskList.splice(taskIndex, 1)
    }

    const getTasksByStatus = (status) => {
        return taskList.filter((item) => item.status === status)
    }

    const sortTasks = () => {
        return [].concat(
            getTasksByStatus('Открыт').sort((a, b) => b.updateTime - a.updateTime),
            getTasksByStatus('В работе').sort((a, b) => b.updateTime - a.updateTime),
            getTasksByStatus('Закрыт').sort((a, b) => b.updateTime - a.updateTime)
        )
    }

    return {
        taskList,
        taskSortList,
        countsOfStatuses,
        onAddTask,
        onChangeTask,
        onDeleteTask,
    }
}
