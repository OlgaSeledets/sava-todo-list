import { useDispatch } from 'react-redux';
import { setStatus } from '../../slices/todoSlice';

type TodoItemProps = {
    id: string
    completed: boolean
    text: string
}

export function TodoItem(props: TodoItemProps): JSX.Element {
    const dispatch = useDispatch();

    return (
        <div className='todo'>
            <input
                type='checkbox'
                className='todo-checkbox'
                style={{ backgroundColor: props.completed ? "#00D8A7" : "#FFFFFF" }}
                checked={props.completed}
                onChange={() => dispatch(setStatus({ completed: !props.completed, id: props.id }))}
            />
            <p className='todo-item' style={{ textDecoration: props.completed ? "line-through" : "none" }}>{props.text}</p>
        </div>
    );
};
