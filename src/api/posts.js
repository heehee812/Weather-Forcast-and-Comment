import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import 'babel-polyfill';

const postKey = 'posts';

export function listPosts(searchText = '') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listPosts(searchText));
        }, 500);
    });
}

// Simulated server-side code
function _listPosts(searchText = '') {
    let postString = localStorage.getItem(postKey);
    let posts = postString ? JSON.parse(postString) : [];
    if (posts.length > 0 && searchText) {
        posts = posts.filter(p => {
            return p.text.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
        });
    }
    return posts;
};

export function createPost(mood, text) {
    return new Promise((resolve, reject) => {
        resolve(_createPost(mood, text));
    });
}

// Simulated server-side code
function _createPost(mood, text) {
    const newPost = {
        id: uuid(),
        mood: mood,
        text: text,
        ts: moment().unix(),
        clearVotes: 0,
        cloudsVotes: 0,
        drizzleVotes: 0,
        rainVotes: 0,
        thunderVotes: 0,
        snowVotes: 0,
        windyVotes: 0,
        voted: "none"
    };
    const posts = [
        newPost,
        ..._listPosts()
    ];
    localStorage.setItem(postKey, JSON.stringify(posts));
    return newPost;
}

export function createVote(id, mood) {
    return new Promise((resolve, reject) => {
        _createVote(id, mood);
        resolve();
    });
}

// Simulated server-side code
function _createVote(id, mood) {
    const posts = _listPosts().map(p => {
        // TODO: Check p
        if (p.id === id) {
            console.log(p.voted);
            if(p.voted == "none"){
                p.voted= mood;
                p[mood.toLowerCase() + 'Votes']++;
            }
            else if(p.voted !=mood){
                p[p.voted.toLowerCase() + 'Votes']= 0;
                p[mood.toLowerCase() + 'Votes']++;
                p.voted= mood;
            }
            else{
                p[mood.toLowerCase() + 'Votes']= 0;
                p.voted= "none";
            }

        }
        return p;
    });
    localStorage.setItem(postKey, JSON.stringify(posts));
}