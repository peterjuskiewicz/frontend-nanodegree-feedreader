/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {
        /* test that makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined', function() {
            allFeeds.forEach((item) => {
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);
            });

         });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('Name defined', function(){
            allFeeds.forEach((item) => {
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);
            });

         });


    });


    describe('The menu', function(){

        /* test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('Element hidden be default', function(){
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /*  test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('Element visible on the first click', function(){

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

        });

        it('Element invisible on the second click', function(){

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });



    });


        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, done);

        });

        it("has entry element", function(done) {

            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
  });

    });


        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

    describe('New Feed Selection', function() {
        var bodyBefore;
        beforeEach(function(done){
            bodyBefore = $('body').children();

            loadFeed(0, loadFeed(1, done));




        });

        it('should change the content', function(done){
            var bodyAfter = $('body').children();
            expect(bodyBefore).not.toBe(bodyAfter);
            done();
        });

    });

}());
