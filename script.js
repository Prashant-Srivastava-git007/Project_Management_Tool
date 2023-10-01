// script.js

// Sample project data
const projects = [
    { name: '1:- E-Commerce Site', description: 'Devloping a complete Ecommerce site using Full Stack Technology' },
    { name: '2:- Software Development', description: 'Developing a software with user interface for a Bank System' },
];

// Sample chat messages
const chatMessages = [
    { sender: 'Manager', message: 'Hello, team!' },
    { sender: 'Team Leader', message: 'Hi there!' },
];

// Sample task data
const tasks = [
    { title: 'Prototype', assignee: 'Rohit' },
    { title: 'Coding', assignee: 'Sweta' },
    { title: 'Testing', assignee: 'Lkhan' },
    { title: 'Deployment', assignee: 'Ravi' },
    { title: 'Maintence', assignee: 'Lakshmi' },
];

// Function to populate projects, chat, and tasks
function populateContent() {
    const projectList = document.getElementById('project-list');
    const chatMessagesDiv = document.getElementById('chat-messages');
    const taskList = document.getElementById('task-list');

    projects.forEach((project) => {
        const projectItem = document.createElement('li');
        projectItem.textContent = `${project.name} - ${project.description}`;
        projectList.appendChild(projectItem);
    });

    chatMessages.forEach((message) => {
        const chatMessage = document.createElement('div');
        chatMessage.textContent = `${message.sender}: ${message.message}`;
        chatMessagesDiv.appendChild(chatMessage);
    });

    tasks.forEach((task) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.title} - Assignee: ${task.assignee}`;
        taskList.appendChild(taskItem);
    });
}

// Populate content when the page loads
populateContent();

// Function to handle sending chat messages
document.getElementById('send-chat').addEventListener('click', () => {
    const chatInput = document.getElementById('chat-input');
    const chatMessagesDiv = document.getElementById('chat-messages');
    const message = chatInput.value;

    if (message) {
        const chatMessage = document.createElement('div');
        chatMessage.textContent = `You: ${message}`;
        chatMessagesDiv.appendChild(chatMessage);

        // Clear the input field
        chatInput.value = '';
    }
});