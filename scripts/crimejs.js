

const crimes = [ //this is like only 2% of all of them - there's more federal crimes than you'd think
    'Advocating Overthrow of Government',
    'Aggravated Assault/Battery',
    'Aggravated Identity Theft',
    'Aiming a Laser Pointer at an Aircraft',
    'Airplane Hijacking',
    'Anti-racketeering',
    'Antitrust',
    'Armed Robbery',
    'Arson',
    'Assassination',
    'Assault with a Deadly Weapon',
    'Assaulting or Killing Federal Officer',
    'Assisting or Instigating Escape',
    'Attempt to commit Murder/Manslaughter',
    'Bank Burglary',
    'Bankruptcy Fraud/Embezzlement',
    'Bank Larceny',
    'Bank Robbery',
    'Blackmail',
    'Bombing Matters',
    'Bond Default',
    'Breaking and/or Entering Carrier Facilities',
    'Bribery Crimes',
    'Certification of Checks Fraud',
    'Child Abuse',
    'Civil Action to Restrain Harassment of a Victim or Witness',
    'Coercion',
    'Commodities Price Fixing',
    'Computer Crime',
    'Concealing Escaped Prisoner',
    'Concealing Person from Arrest',
    'Concealment of Assets',
    'Conspiracy in matters under FBI jurisdiction',
    'Conspiracy to Impede or Injure an Officer',
    'Contempt of Court',
    'Continuing Criminal Enterprise',
    'Conveying False Information',
    'Copyright Matters',
    'Counterfeiting',
    'Counterintelligence Crimes',
    'Credit Card Fraud',
    'Crime Aboard Aircraft',
    'Crimes on Government Reservations',
    'Crimes on Indian Reservations',
    'Criminal Contempt of Court',
    'Criminal Forfeiture',
    'Criminal Infringement of a Copyright',
    'Cyber Crimes',
    'Damage to Religious Property',
    'Delivery to Consignee',
    'Demands Against the U.S.',
    'Destruction of Aircraft or Motor Vehicles Used in Foreign Commerce',
    'Destruction of an Energy Facility',
    'Destruction of Property to Prevent Seizure',
    'Destruction of Records in Federal Investigations and Bankruptcy',
    'Destruction of Corporate Audit Records',
    'Destruction of Veterans’ Memorials',
    'Detention of Armed Vessel',
    'Disclosure of Confidential Information',
    'Domestic Security',
    'Domestic Terrorism',
    'Domestic Violence',
    'Drive-by Shooting',
    'Drug Abuse Violations',
    'Drug Smuggling',
    'Drug Trafficking',
    'DUI/DWI on Federal Property',
    'Economic Espionage',
    'Election Law Crimes',
    'Embezzlement',
    'Embezzlement Against Estate',
    'Entering Train to Commit Crime',
    'Enlistment to Serve Against the U.S.',
    'Environmental Scheme Crimes',
    'Escaping Custody/Escaped Federal Prisoners',
    'Examiner Performing Other Services',
    'Exportation of Drugs',
    'Extortion',
    'Failure to Appear on Felony Offense',
    'Failure to Pay Legal Child Support Obligations',
    'False Bail',
    'False Pretenses',
    'False Statements Relating to Health Care Matters',
    'Falsely Claiming Citizenship',
    'False Declarations before Grand Jury or Court',
    'False Entries in Records of Interstate Carriers',
    'False Information and Hoaxes',
    'False Statement to Obtain Unemployment Compensation',
    'Federal Aviation Act',
    'Federal Civil Rights Violation',
    'Financial Transactions with Foreign Government',
    'First Degree Murder',
    'Flight to Avoid Prosecution or Giving Testimony',
    'Forgery',
    'Fraud Activity in Connection with Electronic Mail',
    'Fraud Against the Government',
    'Genocide',
    'Hacking Crimes',
    'Harboring Terrorists',
    'Harming Animals Used in Law Enforcement',
    'Hate Crime Acts',
    'Homicide',
    'Hostage Taking',
    'Identity Theft',
    'Illegal Possession of Firearms',
    'Immigration Offenses',
    'Impersonator Making Arrest or Search',
    'Importation of Drugs',
    'Influencing Juror by Writing',
    'Injuring Officer',
    'Insider Trading Crimes',
    'Insurance Fraud',
    'Interference with the Operation of a Satellite',
    'International Parental Kidnapping',
    'International Terrorism',
    'Interstate Domestic Violence',
    'Interstate Violation of Protection Order',
    'Larceny',
    'Lobbying with Appropriated Moneys',
    'Mailing Threatening Communications',
    'Major Fraud Against the U.S.',
    'Manslaughter',
    'Medical/Health Care Fraud',
    'Missile Systems Designed to Destroy Aircraft',
    'Misuse of Passport',
    'Misuse of Visas, Permits, or Other Documents',
    'Money Laundering',
    'Motor Vehicle Theft',
    'Murder by a Federal Prisoner',
    'Murder Committed During Drug-related Drive-by shooting',
    'Murder Committed in Federal Government Facility',
    'Narcotics Violations',
    'Obstructing Examination of Financial Institution',
    'Obstruction of Court Orders',
    'Obstruction of Federal audit',
    'Obstruction of Justice',
    'Obstruction of Criminal Investigations',
    'Officer Failing to Make Reports',
    'Penalties for Neglect or Refusal to Answer Subpoena',
    'Peonage',
    'Perjury',
    'Picketing or Parading',
    'Pirating',
    'Possession by Restricted Persons',
    'Possession of False Papers to Defraud the U.S.',
    'Possession of Narcotics',
    'Private Correspondence with Foreign Government',
    'Probation Violation',
    'Product Tampering',
    'Prohibition of Illegal Gambling Businesses',
    'Protection of Foreign Officials',
    'Public Corruption Crimes',
    'Racketeering',
    'Radiological Dispersal Devices',
    'Ransom Money',
    'Receiving the Proceeds of Extortion',
    'Recording or Listening to Grand or Petit Juries While Deliberating',
    'Reentry of an Alien Removed on National Security Grounds',
    'Registration of Certain Organizations',
    'Reproduction of Citizenship Papers',
    'Resistance to Extradition Agent',
    'Rescue of Seized Property',
    'Retaliating Against a Federal Judge by False Claim or Slander of Title',
    'Retaliating Against a Witness, Victim, or an Informant',
    'Robbery',
    'Robberies and Burglaries Involving Controlled Substances',
    'Sabotage',
    'Sale of Citizenship Papers',
    'Sale of Stolen Vehicles',
    'Searches Without Warrant',
    'Second Degree Murder',
    'Serial Murders',
    'Shoplifting',
    'Smuggling',
    'Solicitation to Commit a Crime of Violence',
    'Stalking In Violation of Restraining Order',
    'Stolen Property; Buying, Receiving, or Possessing',
    'Subornation of Perjury',
    'Suits Against Government Officials',
    'Tampering with a Witness, Victim, or Informant',
    'Tampering with Consumer Products',
    'Tampering with Vessels',
    'Theft of Trade Secrets',
    'Torture',
    'Trafficking in Counterfeit Goods or Services',
    'Transmission of Wagering Information',
    'Transportation into State Prohibiting Sale',
    'Transportation of Slaves from U.S.',
    'Transportation of Stolen Vehicles',
    'Transportation of Terrorists',
    'Trespassing',
    'Treason',
    'Unauthorized Removal of Classified Documents',
    'Use of Fire or Explosives to Destroy Property',
    'Use of Weapons of Mass Destruction',
    'Vandalism',
    'Violation of Prohibitions Governing Atomic Weapons',
    'Violence at International airports',
    'Violent Crimes in Aid of Racketeering Activity',
    'Willful Wrecking of a Train Resulting in Death',
    'Wire Fraud',
]

// const prefixes = [
//     'I have committed',
// ]
// const suffixes = [
//     'today!',
//     '. What do you say in your defense?',
// ]
//
//
// const prefixText = document.getElementById("prefix");
// prefixIndex = parseInt(Math.random() * prefixes.length);
// prefixText.value.setAttribute("value", prefixes[prefixIndex]);
//
// const suffixText = document.getElementById("suffix");
// suffixIndex = parseInt(Math.random() * suffixes.length);
// suffixText.setAttribute("value", suffixes[suffixIndex]);

const funny = document.querySelector('.thefunny');


function reset() {
    document.getElementById("frm1").reset();
}

// function text() {
//     const prefixText = document.getElementById("prefix");
//     const suffixText = document.getElementById("suffix");
//     prefixText.setAttribute("value",  'I have committed');
//     suffixText.setAttribute("value", 'today!'           );
//
// }

function generate() {
    let form = document.getElementById("frm1");
    let prefix = form.elements[0].value;
    let suffix = form.elements[1].value;
    let count = form.elements[2].value;
    let text = prefix;

    //checks
    let numOfCrimes;
    let crimeIndex;
    let theCrime;
    if (count == 1) {
        crimeIndex = parseInt(Math.random() * crimes.length);
        theCrime = crimes[crimeIndex];
        text += " " + theCrime;
    } else if (count < 1) {
        funny.innerHTML = "crime underflow";
    } else if (count > 10000000000) {
        funny.innerHTML = "crime overflow";
    } else {
        //gen
        let i;
        for (i = 2; i < parseInt(count) + 2; i++) {
            if (i === parseInt(count) + 1) {
                crimeIndex = parseInt(Math.random() * crimes.length);
                theCrime = crimes[crimeIndex];
                text += " and 1 count of " + theCrime;
            } else {
                numOfCrimes = parseInt(Math.random() * (parseInt(count) + 1 - i)) + 1;
                crimeIndex = parseInt(Math.random() * crimes.length);
                theCrime = crimes[crimeIndex];
                if (numOfCrimes === 1) {text += " " + numOfCrimes +" count of " + theCrime + ",";}
                else {text += " " + numOfCrimes +" counts of " + theCrime + ",";}

                i += numOfCrimes-1;
            }
        }
    }

    funny.innerHTML = text + " " + suffix;
}
