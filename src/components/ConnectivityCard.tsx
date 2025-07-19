const ConnectivityCard = () => {
  return (
    <section className="hidden md:block py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-card bottom-[48px] via-muted/20 to-card border border-border/50 rounded-lg overflow-hidden shadow-elegant">
          <img 
            src="/Web 1440 - 8.jpg" 
            alt="Product preview" 
            loading="lazy"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectivityCard; 