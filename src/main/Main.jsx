//Компонент, который содержит шапку и блок с карточками
import { useEffect, useState } from "react";
import Header from "../header/Header";
import { nanoid } from 'nanoid';
import styles from './Main.module.css';
import Note from "../item/Note";

//массив с информацией для начальной карточки
const data = [
    {
      id: nanoid(),
      title: 'Название заметки',
      text: 'Текст заметки'
    }
  ]

function Main() {
    //стэйт для карточек с заданием и запись в локал сторедж
    const [items, setItems] = useState(() => {
        const savedState = localStorage.getItem('items');
        const initialState = JSON.parse(savedState);
        return initialState || data ;
    });
    
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    //функция для удаления карточки по кнопке
    const removeItem = (id) => (
        setItems([...items].filter(item => item.id !== id))
    );

    //изменение в стейте информации о карточке по её айди
    function onHandleChange(id, title, text){
        const prev = [...items]
        for (let i = 0; i < prev.length; i++){
            if (prev[i].id === id){
                prev[i] = {id, title, text}
            }
        }
        setItems(prev)
    }
    return ( 
        <div className={styles.wrap}>
            <Header setItems={setItems} />
            <div className={styles.notes}>
                {items.map(item => (
                    <Note 
                        key={item.id} 
                        onHandleChange={onHandleChange} 
                        id={item.id} 
                        title={item.title} 
                        text={item.text} 
                        removeItem={removeItem}
                    />
                ))}
            </div>
        </div>
     );
}

export default Main;