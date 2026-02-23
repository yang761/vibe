// app.js

class LearningTimer {
    constructor() {
        this.studySessions = [];
        this.encouragementMessages = [
            "Keep going, you're doing great!",
            "You're one step closer to your goal!",
            "Every minute counts!",
            "Don't give up!",
            "You're amazing!",
        ];
        this.animals = [
            "🐶 Dog",
            "🐱 Cat",
            "🐦 Bird",
            "🐢 Turtle",
            "🐕‍🦺 Service Dog",
        ];
        this.currentSessionStart = null;
    }

    startSession() {
        this.currentSessionStart = new Date();
        console.log(`Study session started at ${this.currentSessionStart}`);
    }

    endSession() {
        if (!this.currentSessionStart) {
            console.log("No active study session!");
            return;
        }
        const duration = (new Date() - this.currentSessionStart) / 1000; // in seconds
        this.studySessions.push(duration);
        this.currentSessionStart = null;
        console.log(`Study session ended. Duration: ${duration} seconds`);
        this.showEncouragement();
    }

    showEncouragement() {
        const message = this.encouragementMessages[
            Math.floor(Math.random() * this.encouragementMessages.length)
        ];
        const animal = this.animals[
            Math.floor(Math.random() * this.animals.length)
        ];
        console.log(`${message} ${animal}`);
    }

    getTotalStudyTime() {
        const total = this.studySessions.reduce((sum, session) => sum + session, 0);
        console.log(`Total study time: ${total} seconds`);
        return total;
    }

    getHistory() {
        console.log("Study Session History (in seconds):", this.studySessions);
    }
}

// Example Usage
const myLearningTimer = new LearningTimer();
myLearningTimer.startSession();
// Simulate study time
setTimeout(() => {
    myLearningTimer.endSession();
    myLearningTimer.getTotalStudyTime();
    myLearningTimer.getHistory();
}, 5000); // Simulate a 5-second study session
