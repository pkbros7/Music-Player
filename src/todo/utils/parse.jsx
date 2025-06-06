export const parseIfJson = (text) => {
    try {
        return JSON.parse(text)
    } catch (error) {
        return text
    }
}