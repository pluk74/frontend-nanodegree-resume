var bio = {
    "name": "Patrick Luk",
    "role": "Student",
    "contacts": {
        "mobile": "514-889-5687",
        "email": "pluk74@hotmail.com",
        "github": "pluk74",
        "location": "Brossard, Quebec, Canada"
    },
    "welcomeMessage": "Hello",
    "skills": ["complaining", "procrastinating", "sleeping"],
    "biopic": "http://lorempixel.com/400/300/people"
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
    var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
    var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedMobile);

    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMessage);

    //insert contact info into footer

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedLocation);



    this.insertSkills();

};

bio.insertSkills = function() {
    if (this.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function(element, i) {
            $("#skills-h3").append(HTMLskills.replace("%data%", bio.skills[i]));
        });
    }
};

var work = {
    "jobs": [{
        "employer": "Dawson College",
        "location": "3040 Sherbrooke St. W, Westmount, Quebec H3Z 1A4",
        "title": "DB Developer",
        "dates": "November 2013 - current",
        "description": "Compile, analyze, interpret and present data to help the College assess keyperformance indicators such as student demographics, academic performance, admissions, applications, retention rates, graduation rates, etc. Reports developed using SQL 2012/SSRS 2012, Microsoft Excel."
    }, {
        "employer": "Phocus Contact Solutions",
        "location": "Montreal, QC",
        "title": "Programmer",
        "dates": "December 2006 - August 2013",
        "description": "Administration of dialer and phone switch. Design and implement telephony solutions to meet company and client needs."
    }]
};

work.display = function() {
    this.jobs.forEach(function(element, i) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    });
};
var projects = {
    "projects": [{
        "title": "First Project",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in maximus nulla. Cras aliquet iaculis est, a tincidunt neque suscipit ut. Phasellus auctor velit eros, quis porta sapien tempus sit amet. Sed nibh mi, porta vel eros a, convallis dapibus lorem.",
        "images": ["http://lorempixel.com/400/200/nightlife", "http://lorempixel.com/400/200/food"]
    }, {
        "title": "Second Project",
        "dates": "2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in maximus nulla. Cras aliquet iaculis est, a tincidunt neque suscipit ut. Phasellus auctor velit eros, quis porta sapien tempus sit amet. Sed nibh mi, porta vel eros a, convallis dapibus lorem.",
        "images": ["http://lorempixel.com/400/200/fashion", "http://lorempixel.com/400/200/business"]
    }]
};

projects.display = function() {

    this.projects.forEach(function(element, i) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            projects.projects[i].images.forEach(function(element, j) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImages);
            });
        }
    });
};

var education = {
    "schools": [{
        "name": "Concordia University",
        "location": "Montreal, QC",
        "degree": "none",
        "majors": ["Geography"],
        "dates": "1996",
        "url": "http://www.concordia.ca"
    }, {
        "name": "Champlain College",
        "location": "St.Lambert, QC",
        "degree": "DEC",
        "majors": ["Commerce", "raising hell"],
        "dates": "1995",
        "url": "http://www.champlainonline.com"
    }],
    "onlineCourses": [{
        "title": "Udacity Nanodegree: Front-End Development",
        "school": "Udacity",
        "dates": "Now",
        "url": "http://www.udacity.com"
    }]
};

education.display = function() {
    this.schools.forEach(function(element, i) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedMajor);
    });

    this.onlineCourses.forEach(function(element, i) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedURL);
    });
};

//run display functions

bio.display();
work.display();
projects.display();
education.display();