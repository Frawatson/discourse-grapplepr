export default Discourse.Route.extend({
  model(params) {
    return this.store.find("topic", params.id);
  },

  afterModel(topic) {
    // hide the notification reason text
    topic.set("details.notificationReasonText", null);
  },

  actions: {
    didTransition() {
      this.controllerFor("application").set("showFooter", true);
      return true;
    }
  }
});
