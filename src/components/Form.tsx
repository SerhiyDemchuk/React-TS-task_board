import React, {useRef} from 'react'

interface FormProps {
    onAdd(title: string): void 
  }

export const Form: React.FC<FormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')

    const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input 
            // onChange={changeHandler}
            //  value={title}
            ref={ref}
              type="text"
               id="title"
                placeholder="Type todo"
                onKeyPress={keyPressHandler}
                />
            <label htmlFor="title" className="active">
                Type todo
            </label>
        </div>
    )
}

export default Form