I WANT TO CREATE A WORKING WEBSITE FOR THE STUDENTS WHO ARE IN THEIR FIRST YEARS AND MOVING TO SECOND YEARS AND WHO WANT TO DO THEIR BRANCH CHANGE 
based on their cgpa's , category,jee main ranks, prefrence order of their branches, and number of available seats in the particular branch.
BASICALLY, THERE SHOULD BE FIRST A WELCOME PAGE ON WHICH THERE SHOULD BE TWO OPTIONS FOR LOGIN ONE FOR THE USER AND ANOTHER FOR THE ADMIN
NOW WHEN WE CLICK ON THE USER BUTTON THEN IT SHOULD TAKE US TO THE BRANCH CHANGE PORTAL DIRECTLY WITHOUT ASKING FOR ANY TYPE OF USERNAME OR PASSWORD CREDENTIALS WHEREAS WHEN WE CLICK ON THE ADMIN BUTTON THEN IT SHOULD ASK FOR THE USERNAME AND PASSWORD AND UPON VERIFYING THAT IT SHOULD TAKE US TO THE ADMIN PORTAL
NOW COMING TO THE BRANCH CHANGE PORTAL IT SHOULD HAVE SOME FILEDS WHICH SHOULD TAKE DATA ENTERED BY THE USER AND UPON ENTERING THE DATA BY THE USER AND CLICKING ON THE SUBMIT BUTTON THEN DATA SHOULD BE SENT TO THE ADMIN AND STORED THERE FOR THE ADMIN SO THAT HE CAN MODIFY,EDIT AND DELETE THE  DATA ACCORDING TO HIS NEED.
FIELD TO BE ADDED IN THE BRANCH CHANGE PORTAL FOR THE USER TO ENTER THE DATA ARE MENTIONED BELOW
FIELD-1:- NAME
FIELD-2:- ROLL NO.
FIELD-3:- JEE MAIN RANK
FIELD-4:- CATEGORY
FIELD-5:- CGPA
FIELD-6:- PREFERENCE-1
FIELD-7:- PREFERENCE-2
FIELD-8:- PREFERENCE-3
 IN FIELD-4:-CATEGORY THERE SHOULD BE A DROP-DOWN MENU HAVING OPTIONS AFOR USER TO SELECT A CATEGORY AS FOLLOWS:-
1.Open
2.OPEN-PWD
3.EWS
4.EWS-PWD
5.SC 	
6.SC-PWD
7.ST
8.ST-PWD
9.OBC-NCL
10.OBC-NCL-PWD
FOR THE FIELD:-6,7,8 i.e. PREFERENCE-1,2,3 THERE SHOULD BE SIMILAR DROP DOWN MENU'S AS MENTIONED BELOW
1 Aerospace Engineering
2 Civil Engineering
3 Computer Science and Technology
4 Electrical Engineering
5 Electronics and Telecommunication Engineering
6 Information Technology
7 Mechanical Engineering
8 Metallurgy and Materials Engineering
9 Mining Engineering
DATA TYPES FOR INPUT IN VARIOUS FIELDS
FOR THE NAME FIELD IT SHOULD TAKE ONLY CHARACTER INPUT NOT ANY TYPE OF THE NUMERICAL INPUT AND FOR THE ROLL NO. IT SHOULD TAKE ALPHANUMERIC INPUT WITHOUT ANY TYPE OF SPECIAL CHARACTERS
FOR JEE MAIN RANK FIELD IT SHOULD TAKE ONLY INTEGERS
FOR CGPA FIELD IT SHOULD INTEGER AS WELL AS DOUBLE DATA TYPE
AFTER ENTERING ALL THESE DETAILS BY THE USER THERE SHOULD BE A SUBMIT BUTTON UPON CLICKING TO IT IT SHOULD SUBMIT THE DATA TO ADMIN FOR FURTHER ANY ACTION ON THE DATA AS MENTIONED ABOVE AND TO THE USER IT SHOULD RESULT AS MENTIONED BELOW IN FURTHER INSTRUCTIONS.
RESULT IT SHOULD SHOW 
1.IT SHOULD SHOW THE BRANCH ALLOCATED TO THE USER ACCORDING TO THE PREFERENCES ENTERED,HIS SELECTED CATEGORY AND ALLOCATION SCHEME
2. "ALLOCATION SCHEME"-IT SHOULD BE LIKE THIS FIRST IT SHOULD CHECK THE CATEGORY SELECTED BY THE USER AND UNDER THAT CATEGORY IF THERE ARE ANY VACANCIES PRESENT IN THE BRANCH MENTIONED IN THE FIRST PREFERENCE ENTERED BY THE USER THEN IT SHOULD ALLOCATE THE FIRST PREFERENCE TO THE USER AND SHOW THAT AS THE RESULT OTHERWISE AGAIN IT SHOULD FIRST CHECK THE CATEGORY SELECTED BY THE USER AND UNDER THAT CATEGORY IF THERE ARE ANY VACANCIES PRESENT IN THE BRANCH MENTIONED IN THE SECOND PREFERENCE ENTERED BY THE USER THEN IT SHOULD ALLOCATE THE SECOND PREFERENCE TO THE USER AND SHOW THAT AS THE RESULT OTHERWISE AGAIN IT SHOULD FIRST CHECK THE CATEGORY SELECTED BY THE USER AND UNDER THAT CATEGORY IF THERE ARE ANY VACANCIES PRESENT IN THE BRANCH MENTIONED IN THE THIRD PREFERENCE ENTERED BY THE USER THEN IT SHOULD ALLOCATE THE THIRD PREFERENCE TO THE USER AND SHOW THAT AS THE RESULT OTHERWISE SHOW THE USER AS THE MESSAGE THAT"SORRY, NO VACANCY AVAIALABLE."
ALSO DECREASE THE VACANCY COUNT OF THE BRANCH UNDER THE SELECTED CATEGORY BY THE USER BY ONE ON EACH ALLOCATION OF THE THAT BRANCH UNDER THE SELECTED CATEGORY TO USER ACCORDING TO THEIR PREFERNCES. SINCE INITIALLY THERE WILL BE NO DATA MENTIONED IN THE TABLE OF VACANCY TABLE SO WHEN USER ENTERS ALL THE DETAILS AND CLICKS ON THE SUBMIT BUTTON SO THEN IT SHOULD SHOW A MESSAGE TO THE USER THAT "SORRY, BUT ADMIN HAS ENTERED NO DATA IN THE VACANCY TABLE ,SO I CAN'T MENTION YOUR ALLOCATED BRANCH RIGTH NOW."
BUT WHEN ONCE ADMIN EVEN MODIFIED THE DATA IN THE VACANCY TABLE FOR THE FIRST TIME ONLY THEN IT SHOULD START SHOWING THE USER THEIR ALLOCATED BRANCH RESULT ACCORDING TO ALLOCATION SCHEME AS MENTIONED ABOVE . IF HE DOES NOT GET EVEN ANY BRANCH DUE TO NO VACANCIES  IN THAT BRANCH OF THAT PARTICULAR CATEGORY THEN IT SHOULD SHOW THE MESSAGE TO THE USER THAT" SORRY BRANCH CHANGE NOT AVAILABLE TO PREFERRED BRANCH."

NOW COMING ON THE ADMIN PORTAL
SO IT SHOULD HAVE ALL THE DATA WHICH IS ENTERED BY THE USERS ON BRANCH CHANGE PORTAL AND SUBMITTED. IT SHOULD BE PRESENT IN THE TABULAR FORMAT AND WITH FUNCTIONALITY FOR THE ADMIN TO EDIT, MODIFY OR DELETE ANY ENTRY BY THE USER
SO TABULAR FORMAT SHOULD HAVE THE FOLLOWING COLUMNS AS MENTIONED BELOW WITH TABLE NAME AS STUDENT DETAILS AND UNDER THAT RESPECTIVELY IT SHOULD STORE THE DATA WHICH IS ENTERED BY THE USERS IN THE RESPECTIVE FIELDS ON THE BRANCH CHANGE PORTAL
COLUMNS NAME ARE:
1.Roll No. 
2.Name 
3.CGPA 
4.JEE Rank 
5.Category 	
6.Preference 1 	
7.Preference 2 	
8.Preference 3 	
9.Allocated Branch 	
10.Action


AND SECOND THING WHICH ADMIN PORTAL SHOULD HAVE IS THAT IT SHOULD CONTAIN LIMITED EXCEL SHEET TYPE TABULAR DATA WHICH CAN BE MODIFIED AND EDITABLE BY THE ADMIN BASICALLY IT WILL CONTAIN THE BRANCH VACANCY DATA AND IT SHOULD BE NAMED AS VACANCY TABLE
COLUMN NAMES FOR THE VACANCY TABLE ARE:-
1.Branch Name 	
2.Open 	
3.OPEN-PWD 	
4.EWS 	
5.EWS-PWD 	
6.SC 	
7.SC-PWD 	
8.ST 	
9.ST-PWD 	
10.OBC-NCL 	
11.OBC-NCL-PWD 	
AND BRANCH NAME COLUMN SHOULD FURTHER BE FILLED WITH DATA OF DIFFERENT BRANCH NAMES SO THAT ADMIN CAN ENTER THE VACANCY FOR EACH CORRESPONDING CATEGORY FOR THAT PARTICULAR BRANCH SO BRANCH NAMES AS MENTIONED ARE:-

1 Aerospace Engineering
2 Civil Engineering
3 Computer Science and Technology
4 Electrical Engineering
5 Electronics and Telecommunication Engineering
6 Information Technology
7 Mechanical Engineering
8 Metallurgy and Materials Engineering
9 Mining Engineering

AFTER THIS THERE SHOULD SOME FUNCTIONALITY FOR THE ADMIN SIDE TO PUBLISH THE RESULTS 


