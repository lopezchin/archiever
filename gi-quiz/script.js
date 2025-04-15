let questions = [
    { question: "A Term which refers to a relative division of risk between the insurer and the insured, depending upon the relative amount of the policy and the actual value of the property insured and takes effect only when the actual loss is partial and less than the amount of the policy is", options:["A. Reinsurance","B. Co-Insurance","C. Double Insurance","D. Over Insurance"], answer: "B"},
    { question: "Explosion to be recoverable as extraneous risk and written in conjunction with the standard fire policy must be:", options:["A. Explosion from pressure vessels","B. Any explosion","C. Chemical explosion, as in the case of gas used for lighting or domestic purposes","D. None of the above"], answer: "C"},
    { question: "With respect to Coinsurance Average or Contribution Clause which of following statements is true", options:["A. The insured is never penalized","B. The insured is always penalized","C. Under some circumstances, the insured is penalized","D. None of the above"], answer: "D"},
    { question: "According to the term of the “Loss Clause” (which is contained in the coverage form attached to a fire policy) must an insured request the reinstatement of his insurance after a loss occurred?", options:["A. Not until the premises have been restored","B. Yes, if the loss exceeds 5%","C. No, the coverage is not reduced by the occurrence (or payment) of a loss","D. No, the insurance company will reinstate the coverage automatically"], answer: "A"},
    { question: "Why must an insured have an insurable interest in the property insured?", options:["A. To obtain a measurement of the insured's loss","B. Guard against moral hazard","C. Prevent wagering","D. All of the above"], answer: "D"},
    { question: "Under the Insurance Law, a fund was created to be used in the payment of allowed claims against an insurance company authorized to transact business in the Philippines, remaining unpaid by reason of insolvency of such company. The fund is the", options:["A. Security Fund","B. Mutual Fund","C. Charitable Trust Fund","D. Variable Contract Fund"], answer: "A"},
    { question: "Under the provision of the Insurance Code, a cancellation notice to the insured from the insurer, to be effective, shall be based on the occurrence of any of the following, except:", options:["A. Non-payment of premium","B. Verbal notice to the insured","C. Discovery of fraud or material misrepresentation","D. Physical changes I n the property insured making the property uninsurable"], answer: "B"},
    { question: "In Health Insurance, Total Disability is taken to mean", options:["A. A complete inability of the insured to engage in his occupation for a period specified in the policy","B. Inability to engage in any gainful occupation for which he is fitted by education and training","C. The insured is not able to perform any gainful occupation","D. All of the above"], answer: "D"},
    { question: "An insurable interest exists in the following instances I. In the love and affection of persons related by blood or by law<br/>II. If a person is interested in the well-being of another person<br/>III. If a person is interested in buying insurance on another person<br/>IV. If a person has an economic interest in the insured even though he is not related to the insured", options:["A. I, II and III","B. I and IV","C. I, III and IV","D. I, II, III and IV"], answer: "B"},
    { question: "An insured property being shipped may be stationary temporarily at a certain location. The property will eventually continue on its way to its destination. The kind of shipment, in insurance is known a", options:["A. F.O.B.","B. C.I.F.","C. On consignment","D. In due course of transit"], answer: "D"},
    { question: "A kind of insurance that protects the insured against loss due to the non-performance of contract to which he is a party is", options:["A. Disability Insurance","B. Cooperative Insurance","C. Excess Insurance","D. Guaranty Insurance"], answer: "D"},
    { question: "Generally, Fidelity Bonds are issued to become effective as of a given date for", options:["A. A continuous term","B. Specified term","C. A term of employment","D. Concealment"], answer: "C"},
    { question: "All of the following are true, except", options:["A. A Surety bond cannot be made a substitute for an insurance policy as cover for a motor vehicle under the CMVLI","B. A Certificate of Cover issued to an operator of motor vehicle may serve as proof of coverage","C. A Certificate of Cover can be presented to government agents in charge of enforcing traffic laws","D. Certificate of Cover may be issued in lieu of a Certificate of Insurance"], answer: "C"},
    { question: "A misrepresentation is not material unless it led the insurance company to issue coverage that would not have been issued if the true facts had been known. This statement is", options:["A. Valid only if there was a witness","B. False","C. True","D. False, a misrepresentation is always material"], answer: "C"},
    { question: "Under the liability feature of an insurance policy, the term “upper limit” means the", options:["A. Extent of the liability for any accident involving more than one person","B. Extent of the liability for one person injured or killed in an accident","C. Amount the company will pay for property damage","D. Amount the company will pay for property damage and medical coverage"], answer: "A"},
    { question: "With respect to the Standard File Policy, the term “Vacancy” means", options:["A. Unfurnished and not lived in","B. Furnished but not lived in","C. Lived in but not furnished","D. None of the above"], answer: "A"},
    { question: "Which of the following perils are not covered under the Standard Fire Policy", options:["A. Rebellion","B. Civil War","C. Enemy Attack","D. All of the above"], answer: "D"},
    { question: "In Fidelity or Surety Bonds, the word “indemnity” refers to:", options:["A. An agreement to protect both Principal and Obligee","B. An agreement to protect the Surety","C. An agreement to protect the Principal","D. An agreement to protect the Obligee"], answer: "B"},
    { question: "The insurance law specifically prohibits misrepresentation by agents with regard to which of the following matters: I. The terms, benefits or advantages of any policy<br/>II. The dividends to be paid by the insurance company<br/>III. The financial condition of any company<br/>IV. The dividends previously paid by the insurance company", options:["A. I and III","B. I, II and III","C. I","D. All of the above"], answer: "A"},
    { question: "Losses or damages due to consequences of civil war, revolution, rebellion, insurrection or civil strike arecovered by:", options:["A. Institute Cargo Clause - Strike, Riots and Civil Commotion","B. Institute War Clause","C. Institute All Risk (AR)","D. None of the above"], answer: "B"},
    { question: "Which of the following statements in Marine Insurance on “abandonment” is false?", options:["A. It is an act of the insured which after a constructive total loss, he declares the relinquishment to the insurer of his interest in the thing insured","B. It can be partial or conditional","C. It is equivalent to a transfer by the insured of his interest in the thing insured","D. It can be sustained only upon cause specified in the notice of abandonment"], answer: "B"},
    { question: "A passenger, under the LTO insurance", options:["A. Is always a fare paying person being transported and conveyed by a motor vehicle for transportation of passenger for compensation","B. Need not necessarily be a fare paying passenger","C. Combination of a & b","D. None of the above"], answer: "A"},
    { question: "Jettison, in Marine Insurance", options:["A. Includes every wrongful act willingly committed by the master or crew to the prejudice of the owner","B. Refers to temporary detainment of property with a view to ultimate release","C. Refers to throwing overboard of cargo or part of a vessel's equipment in order to relieve a vessel when it is in peril","D. None of the above"], answer: "C"},
    { question: "An insuring agreement:", options:["A. Defines the liability","B. Specifies how much the insured will receive","C. Defines the condition under which benefits will be paid subject to exclusions and limitation","D. Binds the insurance company to the risk"], answer: "C"},
    { question: "Under the Compulsory Motor Vehicle Insurance, the basis for determining the amount of insurance required for passenger liability is", options:["A. Horse power","B. Displacement capacity","C. Number of passenger","D. Unladen weight"], answer: "C"},
    { question: "Why is the application for insurance important?", options:["A. It gives the company information for the sale of insurance at a later date","B. Because it gives the company information on other prospects in the family","C. It is the easiest way to get the applicant to sign up for coverage","D. Because the company accepts or rejects the applicants based on the information in the application"], answer: "D"},
    { question: "In a court action to regain possession of his personal property, the plaintiff files a bond known as", options:["A. Attachment Bond","B. Seizure Bond","C. Replevin Bond","D. Requisition Bond"], answer: "C"},
    { question: "Under the Average Clause of the fire policy, the Insured;", options:["A. Shall be paid in full value of his loss","B. Is not bound to insure the property","C. Shall be considered as self-insurer of the uninsured portion","D. None of the above"], answer: "C"},
    { question: "The provision in a Standard Fire Policy that - except as may be stated on the face of this policy there is no other insurance on the property hereby covered - breach of this condition will render the policy null and void is known as Average Clause", options:["A. Control of the property","B. Waiver of premium","C. Average Clause","D. Other insurance Clause"], answer: "D"},
    { question: "A contract signed and executed by a third party in favor of a bonding company by virtue of which said party binds himself to indemnify the company against loss which may arise by reason of the issuance of the bond is called:", options:["A. Contractor's Bond","B. Fiduciary Bond","C. Surety Bond","D. Third Party Indemnity Agreement"], answer: "D"},
    { question: "Comprehensive insurance issued to cover private houses and household under fire policy is otherwise known as a package policy.", options:["A. TRUE","B. FALSE"], answer: "A"},
    { question: "The value of the ship is its value at the beginning of the risk including all articles or changes which add that permanent value.", options:["A. TRUE","B. FALSE"], answer: "A"},
    { question: "There is reinsurance when the same risk is insured by several insurers repeatedly in respect to the same subject and interest", options:["A. TRUE","B. FALSE"], answer: "B"},
    { question: "The definition of “insured” as used in the auto liability policy includes as insured the employees of a garage who may be operating the automobile with permission of the name insured", options:["A. TRUE","B. FALSE"], answer: "B"},
    { question: "Death or bodily injury to any person in the employ of the insured arising out of and in the course of such employment is not compensable under a motor car policy.", options:["A. TRUE","B. FALSE"], answer: "A"},
    { question: "Suretyship exists whenever one party guarantees performance by another party of an obligation or undertaking.", options:["A. TRUE","B. FALSE"], answer: "A"},
    { question: "All risks policies include all perils.", options:["A. TRUE","B. FALSE"], answer: "A"},
    { question: "If the insured property is more than ¾ destroyed, it may be abandoned to the company as a total loss, according to the standard fire policy.", options:["A. TRUE","B. FALSE"], answer: "B"},
    { question: "Warranty in Marine Insurance is a stipulation forming part of the policy as to some fact, condition or circumstances relating to the risk.", options:["A. TRUE","B. FALSE"], answer: "A"},
    { question: "If more than 2/3 of the goods value is actually lost the owner has the right to abandon and consider it a total loss", options:["A. TRUE","B. FALSE"], answer: "B"},
    { question: "Form of coverage which primarily concerned with the protection of goods in transit", options:["A. Marine Insurance","B. Insurance Contract","C. Surety Bond","D. Double Insurance"], answer: "A"},
    { question: "Insurance affected in property either in one or several companies to an amount which separately or in aggregate exceeds the actual cash value of the insured's interest in the property", options:["A. F.O.B.","B. Co-Insurance","C. Warranty","D. Over-Insurance"], answer: "D"},
    { question: "Indicate that the title will pass from the shippers to the consignee at the specified point in transit", options:["A. Cover Notes","B. Physical Hazard","C. F.O.B.","D. Insurance Contract"], answer: "C"},
    { question: "Exist when the same risk is insured by several insurers separately in respect to the same subject and interest", options:["A. Particular Average","B. Double Insurance","C. Double Insurance","D. Loss of Voyage"], answer: "B"},
    { question: "Statement by the insured the truth of which becomes a condition of the validity of the policy", options:["A. Warranty","B. Physical Hazard","C. Individual Policy","D. Insurance Contract"], answer: "A"},
    { question: "Written evidence of provisional insurance contracts which are to be issued only when regular fire policies cannot be granted for certain valid reason", options:["A. Cover Notes","B. Insurance Contract","C. Particular Average","D. Physical Hazard"], answer: "A"},
    { question: "Agreement among three parties whereby a surety company guarantee the performance by an individual of an obligation or undertaking in favor of the third party", options:["A. Insurance Contract","B. Surety Bond","C. Physical Hazard","D. Injunction Bond"], answer: "B"},
    { question: "Bond to prevent an individual from committing a specific act that will injure him such selling a business", options:["A. Particular Average","B. Injunction Bond","C. Warranty","D. Cover Notes"], answer: "B"},
    { question: "A provision which specifies that the insurance company will pay only a part of a loss and requires policy holder to pay the balance himself", options:["A. Inaurance Contract","B. Replevin Bond","C. Co-Insurance","D. Over-Insurance"], answer: "C"},
    { question: "Term used in marine insurance which mean partial loss", options:["A. Particular Average ","B. Marine Insurance","C. Warranty","D. Injunction Bond"], answer: "A"},
];

function getRandomQuestions(qList, num) {
    let shuffled = qList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

let selectedQuestions = getRandomQuestions(questions, 50);
let questionsDiv = document.getElementById('questions');

selectedQuestions.forEach((q, index) => {
    let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(option => {
        questionHTML += `<label><input type="radio" name="q${index}" value="${option[0]}"> ${option}</label><br>`;
    });
    questionsDiv.innerHTML += questionHTML;
});

// let timeLeft = 7200; // 120 minutes in seconds
let timeLeft = 3600; // 45 minutes in seconds
// let timeLeft = 2700; // 45 minutes in seconds
// let timeLeft = 1800; // 30 minutes in seconds
// let timeLeft = 600; // 10 minutes in seconds
// let timeLeft = 1200; // 20 minutes in seconds
// let timeLeft = 10; // 60 seconds
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById('time').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        document.getElementById("submitButton").click();
    }
}

updateTimer();

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    let formData = new FormData(event.target);
    let results = [];

    selectedQuestions.forEach((q, index) => {
        let userAnswer = formData.get(`q${index}`);
        let correctAnswer = q.answer;
        if (userAnswer === correctAnswer) {
            score++;
        } else {
            results.push({
                question: q.question,
                userAnswer: userAnswer || "No Answer",
                correctAnswer: correctAnswer,
                options: q.options
            });
        }
    });

    localStorage.setItem('quizScore', score);
    localStorage.setItem('quizResults', JSON.stringify(results));
    window.location.href = 'full-results.html';
});

