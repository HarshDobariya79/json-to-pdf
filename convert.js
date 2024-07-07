const carbone = require("carbone");
const fs = require("fs");

// Example JSON data
const data = {
  invoiceNumber: "INV-12345",
  date: "2024-07-07",
  companyName: "Example Corp",
  companyAddress: "123 Example Street",
  customerName: "John Doe",
  customerAddress: "456 Customer Lane",
  items: [
    { description: "Product 1", quantity: 2, price: 50 },
    { description: "Product 2", quantity: 1, price: 100 },
  ],
  totalAmount: 200,
};

const templateFilePath = "template.odt";

// Generate the PDF
carbone.render(templateFilePath, data, { convertTo: "pdf" }, (err, result) => {
  if (err) {
    console.error("Error generating PDF:", err);
    return;
  }

  // Save the generated PDF to a file
  const outputFilePath = "invoice.pdf";
  fs.writeFile(outputFilePath, result, (err) => {
    if (err) {
      console.error("Error saving PDF:", err);
      return;
    }
    console.log("PDF generated successfully:", outputFilePath);
    process.exit(0)
  });
});
