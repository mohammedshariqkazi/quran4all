import React, { useEffect, useState } from 'react';
import Loader from '../Loader.jsx'; // Import the Loader component

function Script() {
  const [selectedChapter, setSelectedChapter] = useState("1");
  const [chapterVerses, setChapterVerses] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading

  const chapterNames = [
    "Surah Fatiha",
"Surah Baqarah",
"Surah Al Imran",
"Surah Nisa",
"Surah Al Maida",
"Surah Al An'am",
"Surah Al A'raf",
"Surah Al Anfal",
"Surah Taubah",
"Surah Yunus",
"Surah Hud",
"Surah Yusuf",
"Surah Ar Ra'd",
"Surah Ibrahim",
"Surah Al Hijr",
"Surah An Nahl",
"Surah Al Isra",
"Surah Al Kahf",
"Surah Maryam",
"Surah Taha",
"Surah Al Anbiya",
"Surah Al Hajj",
"Surah Al Mu'minun",
"Surah An Nur",
"Surah Al Furqan",
"Surah Ash-Shu'ara",
"Surah An Naml",
"Surah Al-Qasas",
"Surah Al-Ankabut",
"Surah Ar-Rum",
"Surah Luqman",
"Surah Sajdah",
"Surah Ahzab",
"Surah Saba",
"Surah Faatir",
"Surah Yaseen",
"Surah As-Saaffaat",
"Surah Saad",
"Surah Az Zumar",
"Surah Ghafir",
"Surah Fussilat",
"Surah Ash Shura",
"Surah Az Zukhruf",
"Surah Ad Dukhaan",
"Surah Al-Jaathiyah",
"Surah Al-Ahqaaf",
"Surah Muhammad",
"Surah Al-Fath",
"Surah Al-Hujuraat",
"Surah Qaaf",
"Surah Adh-Dhaariyaat",
"Surah At-Tur",
"Surah An-Najm",
"Surah Al-Qamar",
"Surah Ar-Rahman",
"Surah Al-Waqiah",
"Surah Al-Hadeed",
"Surah Al-Mujadilah",
"Surah Al-Hashr",
"Surah Al-Mumtahanah",
"Surah As-Saff",
"Surah Al-Jumu'ah",
"Surah Al-Munafiqun",
"Surah At-Taghabun",
"Surah At-Talaq",
"Surah At-Tahreem",
"Surah Al-Mulk",
"Surah Al-Qalam",
"Surah Al-Haaqqa",
"Surah Al-Ma'aarij",
"Surah Nuh",
"Surah Al-Jinn",
"Surah Al-Muzzammil",
"Surah Al-Muddaththir",
"Surah Al-Qiyamah",
"Surah Al-Insaan",
"Surah Al-Mursalaat",
"Surah An-Naba",
"Surah An-Naazi'aat",
"Surah Abasa",
"Surah At-Takwir",
"Surah Al-Infitar",
"Surah Mutaffifin",
"Surah Al-Inshiqaaq",
"Surah Al-Burooj",
"Surah At-Taariq",
"Surah Al-A'la",
"Surah Ghaashiyah",
"Surah Al-Fajr",
"Surah Al-Balad",
"Surah Ash-Shams",
"Surah Al-Layl",
"Surah Ad-Dhuha",
"Surah Sharh",
"Surah At-Tin",
"Surah Al-Alaq",
"Surah Al-Qadr",
"Surah Al-Bayyinahh",
"Surah Az-Zalzalah",
"Surah Al-Adiyat",
"Surah Al-Qariah",
"Surah At-Takathur",
"Surah Al-Asr",
"Surah Al-Humazah",
"Surah Al-Fil",
"Surah Quraysh",
"Surah Al-Maa'oon",
"Surah Al-Kawthar",
"Surah Kaafiroon",
"Surah An-Nasr",
"Surah Al-Masad",
"Surah Al-Ikhlaas",
"Surah Al-Falaq",
"Surah An-Naas",

    // ... Add more chapter names
  ];

  useEffect(() => {
    const fetchVerses = async () => {
      setLoading(true); // Start loading

      const arabicResponse = await fetch('/src/assets/arabic.txt');
      const englishResponse = await fetch('/src/assets/english.txt');

      const arabicText = await arabicResponse.text();
      const englishText = await englishResponse.text();

      const arabicChapters = arabicText.trim().split("\n");
      const englishChapters = englishText.trim().split("\n");

      const chapterVersesData = arabicChapters.map((arabicVerse, index) => {
        const [chapter, verseNo, verse] = arabicVerse.split("|");
        return {
          chapter: parseInt(chapter),
          verseNo: parseInt(verseNo),
          arabic: verse,
          english: englishChapters[index]?.split("|")[2] || "",
        };
      });

      setChapterVerses(chapterVersesData);
      setLoading(false); // Stop loading
    };

    fetchVerses();
  }, []);

  const handleChapterChange = (event) => {
    setSelectedChapter(event.target.value);
  };

  const selectedChapterVerses = chapterVerses.filter(
    (verse) => verse.chapter === parseInt(selectedChapter)
  );

  return (
    <div className="chapter-selector">
      <select value={selectedChapter} onChange={handleChapterChange}>
        {chapterNames.map((chapterName, index) => (
          <option key={index} value={index + 1}>{chapterName}</option>
        ))}
      </select>
      {loading ? (
        <Loader /> // Show loader if loading is true
      ) : (
        <div className="verses-container">
          <div className="verses">
            {selectedChapterVerses.map((verse, index) => (
              <div key={index} className="verse">
                <p className="arabic-verse">{verse.arabic}</p>
                <p className="english-verse">{verse.english}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Script;