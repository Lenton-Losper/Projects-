let btn = document.querySelector('#new-qoute')
let person = document.querySelector('.person')
let qoute = document.querySelector('.qoute')

const quotes = [
    {
        quote: '“Write what you know.”',
        person: 'Lenton Losper'
    },
    {
        quote: '"Every day is a new beginning."',
        person: 'Unknown'
    },
    {
        quote: '“Don’t be afraid to give up the good to go for the great.”',
        person: 'J.D. Rockefeller'
    },
    {
        quote: '"Success is the ability to go from failure to failure without losing your enthusiasm."',
        person: 'Sir Winston Churchill'
    },
    {
        quote: '“The only way to do great work is to love what you do.”',
        person: 'Steve Jobs'
    },
    {
        quote: '"In three words I can sum up everything I’ve learned about life: it goes on."',
        person: 'Robert Frost'
    },
    {
        quote: '“The future belongs to those who believe in the beauty of their dreams.”',
        person: 'Eleanor Roosevelt'
    },
    {
        quote: '"It always seems impossible until it’s done."',
        person: 'Nelson Mandela'
    },
    {
        quote: '“Do not wait for leaders; do it alone, person to person.”',
        person: 'Mother Teresa'
    },
    {
        quote: '"The only limit to our realization of tomorrow will be our doubts of today."',
        person: 'Franklin D. Roosevelt'
    },
    {
        quote: '“Your time is limited, don’t waste it living someone else’s life.”',
        person: 'Steve Jobs'
    },
    {
        quote: '"The purpose of our lives is to be happy."',
        person: 'Dalai Lama'
    },
    {
        quote: '“Life is what happens when you’re busy making other plans.”',
        person: 'John Lennon'
    },
    {
        quote: '"The best way to predict the future is to create it."',
        person: 'Peter Drucker'
    },
    {
        quote: '“Success is not final, failure is not fatal: It is the courage to continue that counts.”',
        person: 'Winston S. Churchill'
    },
    {
        quote: '"In the end, we will remember not the words of our enemies, but the silence of our friends."',
        person: 'Martin Luther King Jr.'
    },
    {
        quote: '“Life is 10% what happens to us and 90% how we react to it.”',
        person: 'Charles R. Swindoll'
    },
    {
        quote: '"Believe you can and you’re halfway there."',
        person: 'Theodore Roosevelt'
    },
    {
        quote: '“If you want to lift yourself up, lift up someone else.”',
        person: 'Booker T. Washington'
    },
    {
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        person: 'Nelson Mandela'
    },
    {
        quote: '“The only thing we have to fear is fear itself.”',
        person: 'Franklin D. Roosevelt'
    },
    {
        quote: '"The best preparation for tomorrow is doing your best today."',
        person: 'H. Jackson Brown Jr.'
    },
    {
        quote: '“The only place where success comes before work is in the dictionary.”',
        person: 'Vidal Sassoon'
    },
    {
        quote: '"It is never too late to be what you might have been."',
        person: 'George Eliot'
    }
];


btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() *quotes.length);
    qoute.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})



