import exmp from './test.json';
import uuid from 'uuid/v1';


export default function () {
    let getUsers = exmp
    typeof getUsers === "string" ?
        JSON.parse(getUsers)
        :
        getUsers;

    //Создаем новый массив объектов в котором копируем данные и добавляем новый ключ uuid

    let newGetUsers = getUsers.map((item) => {
        Object.assign(item, {uuid: uuid()})
        return Object.defineProperty(item, "uuid", {enumerable: false}); //запрещаем свойству uuid быть перечисляемым в цикле

    })
    return newGetUsers;
}