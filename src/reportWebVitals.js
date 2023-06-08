const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


// The reportWebVitals function takes an onPerfEntry callback as an argument.
// Inside the function, it checks if onPerfEntry is defined and is a function.
// If onPerfEntry is a function, it dynamically imports the web-vitals 
// library using the import() function, which allows for dynamic imports in JavaScript.
// Once the web-vitals library is imported, it retrieves individual performance 
// metrics such as Core Web Vitals using functions like getCLS, getFID, getFCP, getLCP, and getTTFB.
// Each of these performance metric functions takes the onPerfEntry callback as an argument, 
// which allows you to send the collected performance data to your analytics or monitoring tools for further analysis.