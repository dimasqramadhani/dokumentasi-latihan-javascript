// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const videoTitle = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'));
const videoTitleLength = videoTitle.length;

// ambil durasi masing masing video
const durations = videoTitle.map(duration => duration.getAttribute('data-duration'));

// ubah durasi menjadi int, ubah menit menjadi detik
const convertInt = durations.map(duration => {
    return duration.split(':');
}); 

// jumlahkan semua detik
const totalSeconds = convertInt.map(duration => {
    const [minutes, seconds] = duration.map(Number);
    return (minutes * 60) + seconds;
});

// ubah format menjadi jam menit detik
const totalTimes = totalSeconds.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

const hours = Math.floor(totalTimes / 3600);
const minutes = Math.floor((totalTimes % 3600) / 60);
const seconds = totalTimes % 60;

const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// simpan DOM
const totalDurations = document.querySelector('ol li p span.total-durasi');
const totalVideo = document.querySelector('ol li p span.jumlah-video');

totalVideo.innerHTML = `${videoTitleLength} video`;
totalDurations.innerHTML = formattedTime;