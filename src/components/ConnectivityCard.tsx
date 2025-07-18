const ConnectivityCard = () => {
  return (
    <section className="hidden md:block py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-card bottom-[48px] via-muted/20 to-card border border-border/50 rounded-lg h-[300px] sm:h-[700px] overflow-hidden shadow-elegant">
          <img 
            src="/45.jpg" 
            alt="Product preview" 
            loading="lazy"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectivityCard; 