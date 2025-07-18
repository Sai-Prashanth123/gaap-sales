const Text = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 pb-22">
      <h1 className="text-4xl font-bold text-center leading-tight"
      style={{ 
        fontSize: '64px',
        background: 'linear-gradient(90deg, #75B5FF 0%, #FFFFFF 50%, #C681AD 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Because Great Sales is About<br />
      Confidence, Not Scripts.</h1>
    </div>
  );
};

export default Text;