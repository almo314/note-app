import { nanoid } from "nanoid";
import styles from './Header.module.css';
import {MdAddTask} from 'react-icons/md';

function Header(props) {
    //создание новой 'голой' карточки
    const addItem = () => {
        props.setItems(prev => [...prev,
            {
                id: nanoid(),
                title: '',
                text: ''
            }
        ])
    }
    return ( 
        <div className={styles.header}>
            <h1>Приложение Заметки</h1>
            <button className={styles.header_btn} onClick={addItem}>
                <div style={{fontSize: 18}}>
                    Добавить заметку
                </div>
                <MdAddTask style={{height:'20px', width: '20px'}}/>
            </button>
        </div>
     );
}

export default Header;