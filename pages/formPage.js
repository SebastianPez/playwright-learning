class FormPage {
    constructor(page) {
        this.page = page;
        this.nameInput = '#userName';
        this.emailInput = '#userEmail';
        this.submitBtn = '#submit';
        this.output = '#output';
    }

    async goto() {
        await this.page.goto(process.env.UI_URL + '/text-box');
    }

    async fillForm(name, email) {
        await this.page.fill(this.nameInput, name);
        await this.page.fill(this.emailInput, email);
    }

    async submit() {
        await this.page.click(this.submitBtn);
    }
}

module.exports = { FormPage };