// fetch all elemen li contain video's title
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// filter only video with title contain "JAVASCRIPT LANJUTAN"
const videoTitle = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'));
const videoTitleLength = videoTitle.length;

// ambil durasi masing masing video
const durations = videoTitle.map(duration => duration.getAttribute('data-duration'));

// change duration into int, and change minute into second
const convertInt = durations.map(duration => {
    return duration.split(':');
}); 

// summ all second
const totalSeconds = convertInt.map(duration => {
    const [minutes, seconds] = duration.map(Number);
    return (minutes * 60) + seconds;
});

// change format into hour minute second
const totalTimes = totalSeconds.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

const hours = Math.floor(totalTimes / 3600);
const minutes = Math.floor((totalTimes % 3600) / 60);
const seconds = totalTimes % 60;

const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// save DOM
const totalDurations = document.querySelector('ol li p span.total-duration');
const totalVideo = document.querySelector('ol li p span.total-video');

totalVideo.innerHTML = `${videoTitleLength} video`;
totalDurations.innerHTML = formattedTime;
