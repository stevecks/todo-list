import { ref } from 'vue'

export function usePopupTask(popupTask) {
    const statuses = [
        { name: 'Отложить', select: false },
        { name: 'В работу', select: false },
        { name: 'Закрыть', select: false },
        { name: 'Переоткрыть', select: false },
    ]

    const sortStatuses = ref([])
    const selectStatus = ref('')
    const taskInput = ref(popupTask.name)

    const makeSortStatuses = () => {
        if (popupTask.status === 'Открыт')
            sortStatuses.value = statuses.filter((item) => item.name === 'В работу' || item.name === 'Закрыть')
        if (popupTask.status === 'В работе')
            sortStatuses.value = statuses.filter((item) => item.name === 'Отложить' || item.name === 'Закрыть')
        if (popupTask.status === 'Закрыт')
            sortStatuses.value = statuses.filter((item) => item.name === 'Переоткрыть')
    }

    const onClickStatus = (status) => {
        sortStatuses.value.forEach((item) => {
            if (item.name !== status.name) item.select = false
        })
        status.select = !status.select
        if (status.name === 'Отложить') selectStatus.value = 'Открыт'
        if (status.name === 'В работу') selectStatus.value = 'В работе'
        if (status.name === 'Закрыть') selectStatus.value = 'Закрыт'
        if (status.name === 'Переоткрыть') selectStatus.value = 'Открыт'
        if (!status.select) selectStatus.value = ''
    }

    return {
        sortStatuses,
        selectStatus,
        taskInput,
        makeSortStatuses,
        onClickStatus,
    }
}
