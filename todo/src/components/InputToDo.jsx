import React, {useState} from "react";
import 'bulma/css/bulma.css';

export {default as InputToDo} from './InputToDo'
export {default as Filter} from './Filter'
export {default as ToDo} from './ToDo'


export const InputToDo = (props) => {
    //stateを作成する
    const [text, setText] = useState('');

    //入力値をtextに反映
    const handleChange = e => setText(e.taeget.value);

    //Enter押下時、ToDoに追加
    const handleChange = e => {
     if (e.key == 'Enter') {
        if (!text.match(\/S/g)) return;
        props.onAdd(text);
        setText('');
     }
    };

    return (
      <div className="panel-block">
        <input
          class="input"
          type="text"
          placeholder="Enter to add"
          value={text}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
      </div>
    );
}

export default InputToDo;