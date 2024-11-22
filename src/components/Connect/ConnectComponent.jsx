function ConnectComponent() {
  return (
    <div className="connect container">
      <div className="connect_leftside">
        <h1>Lets Connect</h1>
        <p>Say hello at stefan_dodevski31@yahoo.com</p>
        <p>For more info, here’s my RESUME</p>
      </div>
      <div className="connect_rightside">
        <form action="submit">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="7"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ConnectComponent;
