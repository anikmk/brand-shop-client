const HomeSlider = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/wQPWfBd/banner1.jpg)",
            backgroundSize:"cover",
            backgroundPosition:"center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
            Welcome to [AUTOMOTIVE], your premier destination for finding the perfect car that matches your style and needs. We offer a vast selection of top-quality vehicles from prestigious brands like BMW, Maserati, Mercedes-Benz, and <span className="text-primary font-bold">more..</span>
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
