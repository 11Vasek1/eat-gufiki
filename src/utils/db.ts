const KEY = 'data'

export function getData(){
    return JSON.parse(window.localStorage.getItem(KEY) || '[]')
}

export function setData(data: object){
    window.localStorage.setItem(KEY, JSON.stringify(data))
}