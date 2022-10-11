import { CSSTransition } from 'react-transition-group'
import styles from './Toggle.module.css'

const Toggle = (props) => {
    return (<>
        <CSSTransition in={props.dependsOn} mountOnEnter unmountOnExit
            timeout={{ enter: 100 }}
            classNames={{ enterActive: styles.bar__entering }}
        >
            {props.on}
        </CSSTransition>
        <CSSTransition in={!props.dependsOn} mountOnEnter unmountOnExit
            timeout={{ enter: 100 }}
            classNames={{ enterActive: styles.icon__entering }}
        >
            {props.off}
        </CSSTransition>
    </>)
}

export default Toggle