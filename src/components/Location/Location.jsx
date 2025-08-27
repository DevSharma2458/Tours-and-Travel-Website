const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12577.626391397642!2d75.5891397481719!3d24.939345348565418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396587167f748f4f%3A0xb635a3558d44ca82!2sRawatbhata%2C%20Rajasthan%20323305!5e1!3m2!1sen!2sin!4v1740650765389!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
