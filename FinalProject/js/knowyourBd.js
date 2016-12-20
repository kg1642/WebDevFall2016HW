function ADtoBS() {

    function dayOftheYear(enyear, enmonth, enday) {
        // finding Day of the year for the chosen date 
        daysinMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var endays = 0;
        for (i = 1; i < enmonth; i++) {
            endays = endays + daysinMonths[i];
            if (i == 2 && enyear % 4 == 0) {
                endays = endays + 1;
            }
        }
        endays = endays + enday;
        return endays
    }

    function find_np_date(enyear, enmonth, enday, endays) {

        // NepalidataArray is an array that contains the number of days in a month of a specific year. The days in a month vary from year to year in Nepali calendar.
        var NepalidataArray = [
                [2005, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2006, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2007, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
                [2008, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2009, 18, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2010, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2011, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
                [2012, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2013, 18, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2014, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2015, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
                [2016, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2017, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30],
                [2018, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2019, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
                [2020, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2021, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2022, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2023, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
                [2024, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2025, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2026, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
                [2027, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2028, 17, 30, 29, 30, 30, 31, 31, 32, 31, 32, 30, 30, 29, 30],
                [2029, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2030, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
                [2031, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2032, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2033, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2034, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 31, 29, 30, 30],
                [2035, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2036, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2037, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2038, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
                [2039, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2040, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2041, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2042, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
                [2043, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2044, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30],
                [2045, 18, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2046, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
                [2047, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2048, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2049, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2050, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
                [2051, 18, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2052, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2053, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2054, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2055, 17, 30, 29, 30, 30, 31, 31, 32, 31, 32, 30, 30, 29, 30],
                [2056, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2057, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 30, 30, 30, 29],
                [2058, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2059, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2060, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2061, 17, 29, 29, 30, 31, 30, 32, 31, 32, 31, 31, 29, 30, 29],
                [2062, 17, 29, 30, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2063, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2064, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2065, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
                [2066, 17, 30, 29, 29, 31, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2067, 17, 30, 29, 30, 30, 31, 31, 32, 32, 31, 30, 30, 29, 30],
                [2068, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2069, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 29, 30, 30],
                [2070, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
                [2071, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 29, 30],
                [2072, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
                [2073, 17, 29, 29, 30, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
                [2074, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30]
            ]
            // intializing npyear(Nepali year). NepalidataArray corresponds to date from 1949 forward
        var npyear = NepalidataArray[enyear - 1949][0];
        // intializing npmonth to 9 as the January falls on the 9th month of Nepali calendar
        var npmonth = 9;
        // initailizng the days in month to the number of days of 9th month of Nepali Calendar
        var npdaysInmonth = NepalidataArray[enyear - 1949][2];
        // intializing temporary days to the number of days that falls both in January and the 9th month of the Nepali calendar
        var npTempdays = (NepalidataArray[enyear - 1949][2]) - (NepalidataArray[enyear - 1949][1]) + 1;
        // looping through the array until endays is greater than the temporory days
        for (i = 3; endays > npTempdays; i++) {
            npTempdays += NepalidataArray[enyear - 1949][i];
            npdaysInmonth = NepalidataArray[enyear - 1949][i];
            npmonth++;
            if (npmonth > 12) {
                npmonth -= 12;
                npyear++;
            }
        }
        npday = npdaysInmonth - (npTempdays - endays);
        return [npyear, npmonth, npday];
    }

    function display_result(np_date) {
        // Nepali months 
        var NepaliMonths = ["Baisakh", "Jestha", "Asar", "Shrawan", "Bhadra", "Aswin", "Karthik", "Mangshir", "Poush", "Magh", "Fagun", "Chaitra"];
        var monthsCharacters = ["kind-hearted", "extroverts", "introverts", "outgoing and love to live life dangerously", "far-sighted and trustworthy", "clever and witty", "the best in their work", "pious and have a good family life", "beautiful/handsome both inside and out", "highly respected by his peers", "leaders", "just and kind"];
        var monthsprefix = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelveth"];
        var twitter_text = "<a class='twitter-share-button' data-size='large' href='https://twitter.com/intent/tweet?text=My%20Nepali%20Birthday%20is%20on%20" + NepaliMonths[np_date[1]] + "%20" + np_date[2] + "%20" + np_date[0] + ".%20Find%20out%20your%20Nepali%20Birthday%20here:'><img src='images/twitter-button.jpg' </a>";
        console.log(twitter_text);
        var fb_text= "<a class='fb-xfbml-parse-ignore' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse'><img src='images/fb-button.jpg'</a>";
        // innerHTML text 
        document.getElementById('display').innerHTML = "<h3>You were born on <font color='green'><em>" + NepaliMonths[np_date[1]] + " " + np_date[2] + " " + np_date[0] + ". " + NepaliMonths[np_date[1]] + "</em></font> is the <font color='green'><em>" + monthsprefix[np_date[1]] + "</em></font> month in the Nepali Calendar. <br>People born in this month will be <font color='green'><em>" + monthsCharacters[np_date[1]] + ".</h3>"+twitter_text+fb_text;
    }
    // NepalidataArray is an array that contains the number of days in a month of a specific year. The days in a month vary from year to year in Nepali calendar
    function main() {
        // Getting English date from the user and splitting them into three parts 
        var date_input = (document.getElementById("date").value).split("/", 3);
        // changing each component to intergers so that arithmetic operations can be operated on them
        // enyear stands for English Year, enmonth for English Month and so on 
        var enyear = parseInt(date_input[2]);
        var enmonth = parseInt(date_input[0]);
        var enday = parseInt(date_input[1]);

        // this program can perform conversion from year 1949 to 2016
        if (enyear < 1949 || enyear > 2017) {
            alert('Please enter a date between 1949 and 2016')
        }
        var endays = dayOftheYear(enyear, enmonth, enday); //Day of the year for the chosen date 
        var np_date = find_np_date(enyear, enmonth, enday, endays);
        display_result(np_date)
    }

    main()
}
