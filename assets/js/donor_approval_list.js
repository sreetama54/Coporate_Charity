const donorNames = {
    company_names: ["Company A", "Company B", "Company C"],
    individual_names: ["John Doe", "Jane Smith", "Alice Johnson"]
};

const donorSelect = document.getElementById("donorName");

// Populate the select with company names
donorNames.company_names.forEach(companyName => {
    const option = document.createElement("option");
    option.value = companyName;
    option.text = companyName;
    donorSelect.appendChild(option);
});

// Populate the select with individual names
donorNames.individual_names.forEach(individualName => {
    const option = document.createElement("option");
    option.value = individualName;
    option.text = individualName;
    donorSelect.appendChild(option);
});