import {NewDonorInfo} from '../data/newDonorInfo.js'

const donorNames = {
    company_names: ["dummy_company"],
    individual_names: ["dummy_indivual"]
};

// Populate the donorNames object
NewDonorInfo.forEach(donor => {
    if (donor.isCompany === "true") {
        donorNames.company_names.push(donor.fullName);
    } else {
        donorNames.individual_names.push(donor.fullName);
    }
});

// Populate the select field (same as before)
const donorSelect = document.getElementById("registerName");

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