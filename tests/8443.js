describe('Logging a Workout on Fictional Fitness Site', () => {
    // Generating random workout details
    const workoutType = `Workout Type ${Math.floor(Math.random() * 10)}`;
    const duration = Math.floor(Math.random() * 120) + 10; // Duration between 10 and 130 minutes

    beforeEach(() => {
        // Visiting the add workout page of the fictional fitness website
        cy.visit('https://www.fictionalfitness.com/add-workout');
    });

    it('should log a new workout successfully', () => {
        // Selecting a random workout type from a dropdown (assuming the dropdown has options like "Workout Type 1", "Workout Type 2", etc.)
        cy.get('#workout-type').select(workoutType);

        // Typing the random duration into the duration field
        cy.get('#duration').type(duration.toString());

        // Clicking the log workout button
        cy.get('#log-button').click();

        // Checking for a success message
        cy.get('#success-message').should('contain', 'Workout Logged Successfully! Keep up the good work.');

        // Optional: Navigate to the user's workout log and check if the workout is present
        cy.visit('https://www.fictionalfitness.com/my-workouts');
        cy.contains(workoutType).should('be.visible');
        cy.contains(duration.toString()).should('be.visible');
    });
});
