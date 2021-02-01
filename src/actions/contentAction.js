export const getContent = (data) => {
    return {
        type: "GET_CONTENT",
        payload: data
    }
}

export const getContentDetail = (data) => {
    return {
        type: 'DETAIL_CONTENT',
        payload: data
    }
}