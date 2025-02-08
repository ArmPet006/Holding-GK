import {FC} from "react";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";

interface Props {
    theme: "light" | "dark";
}

const Form: FC<Props> = ({theme}) => {
    return (
        <div className={`form_container ${theme}`}>
            <h3>Форма обратной связи</h3>
            <form action="">
                <input type="text" name="name" placeholder="Имя"/>
                <input type="text" name="phone" placeholder="Телефон"/>
                <input type="email" name="email" placeholder="E-Mail"/>
                <textarea name="message" placeholder="Сообщение"></textarea>
            </form>

            <Button
                className="filled"
                width={180}
                height={37}
                theme={theme === "light" ? Theme.dark : Theme.light}
                style={{
                    justifyContent: "flex-end",
                    paddingRight: 10,
                    gap: 35
                }}
            >
                Отправить
                <Arrow size={15}/>
            </Button>
        </div>
    )
}
export default Form
