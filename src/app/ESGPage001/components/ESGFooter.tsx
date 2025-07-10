const ESGFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 py-12">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
      <div className="absolute top-0 right-1/4 h-32 w-32 rounded-full bg-emerald-500/10 blur-xl" />
      <div className="absolute bottom-0 left-1/4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />
      <div className="container mx-auto px-4">
        <div className="relative z-10 text-center">
          <div className="mb-4 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
            ESG永續報告
          </div>
          <p className="text-gray-400">透過負責任的商業實踐，建構永續未來</p>
        </div>
      </div>
    </footer>
  );
};

export default ESGFooter;
