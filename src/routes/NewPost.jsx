import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {
  
  return (
    <Modal>
      {/* If you use React router's Form component, you can take advantage of router's handling of 
      form submission */}
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Speak your piece!</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="author">Who Dis?</label>
          <input type="text" id="author" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type='button'>Cancel</Link>
          <div className={classes.spacer}></div>
          <button>Post!</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  // We originally passed in just "data" to this function, but we can destructure it to get the 
  // request object directly.
  const formData = await request.formData(); // this is a complex object that has much more than just the form values
  const postData = Object.fromEntries(formData); // this is a helper function that converts the form data into a plain object

  await fetch('http://localhost:8080/posts', {
    method: 'POST',  
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}