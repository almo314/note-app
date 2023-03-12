import { useRef, useState } from 'react';
import styles from './Note.module.css';
import {MdDelete} from 'react-icons/md';
import {MdEditNote} from 'react-icons/md';

function Note({onHandleChange, id, title, text, removeItem}) {
    //режим редактирования по кнопке
    const [editMode, setEditMode] = useState(false);

    const textareaRef1 = useRef(null);
    const textareaRef2 = useRef(null);
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);

    const handleChangeTitle = (e) => {
        onHandleChange(id, e.target.value, text)
    }
    const handleChangeText = (e) => {
        onHandleChange(id, title, e.target.value)
    }
    
    //изменение стилей css при редактировании
    const onHandleClick = () => {
        if (editMode){
            p1Ref.current.classList.remove(styles.noactive);
            p2Ref.current.classList.remove(styles.noactive);
            textareaRef1.current.classList.add(styles.noactive);
            textareaRef2.current.classList.add(styles.noactive);
        } else {
            p1Ref.current.classList.add(styles.noactive);
            p2Ref.current.classList.add(styles.noactive);
            textareaRef1.current.classList.remove(styles.noactive);
            textareaRef2.current.classList.remove(styles.noactive);
        }
        setEditMode(!editMode);
    }
    
    return ( 
        <div className={styles.note}>
            <div className={styles.noteheader}>
                <div clasName={styles.notetitle}>
                    <div ref={p1Ref} className={styles.title_content}>
                        {title}
                    </div>
                    <textarea
                        className={`${styles.noactive} ${styles.textareahead}`}
                        ref={textareaRef1}
                        onChange={handleChangeTitle}
                        type='text' 
                        placeholder="Добавить название" 
                        value={title || ''}>
                    </textarea>
                </div>
                <div>
                    <MdEditNote 
                        onClick={() => onHandleClick()}
                        style={{height:'30px', width: '30px'}}
                        title='Редактировать'
                    />
                    <MdDelete 
                        onClick={() => removeItem(id)}
                        style={{height:'30px', width: '30px'}}
                        title='Удалить'
                    />
                </div>
            </div>

            <div>
                <div ref={p2Ref} className={styles.text_content}>
                    {text}
                </div>
                <textarea 
                    className={`${styles.noactive} ${styles.textareacontent}`}
                    onChange={handleChangeText}
                    placeholder="Добавить текст"
                    ref={textareaRef2}
                    value={text || ''}>
                </textarea>
            </div>
        </div>
    );
}

export default Note;