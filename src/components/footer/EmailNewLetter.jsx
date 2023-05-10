
export const EmailNewLetter = () => {
  return (
    <div>
      <h3>email newsletter</h3>
      <p>
        Be the first to know with a variety of e-mail news services. Receiving
        breaking news alerts, delivered straight to your e-mail address
      </p>
      <form>
        <input type='email' placeholder='Enter email...' />

        <input type='submit' value='Suscribe' className='btn btn-primary' />
      </form>
    </div>
  );
};
