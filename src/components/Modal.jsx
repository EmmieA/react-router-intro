import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

function Modal({ children }) {
  const navigate = useNavigate();

  function handleClose() {
    // also would work as navigate('..') which is the same as "cd .." in a cmd prompt
    // navigate('..') would take us to the parent route of the current route as defined in main.jsx
    // But what happens if this new post modal is opened from a route that is not the parent route of the current route?
    // I think that's where navigate(-1) is the better way since it is independent of the route structure
    navigate(-1); 
  }

  return (
    <>
      <div className={classes.backdrop} onClick={handleClose} />
        <dialog open className={classes.modal}>
          {children}
        </dialog>
    </>
  )
}

export default Modal;