import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  // Type Definitions

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  type BookingSubmission = {
    id : Text;
    fullName : Text;
    email : Text;
    phone : ?Text;
    eventType : Text;
    eventDate : ?Int;
    message : Text;
    referenceFiles : [Storage.ExternalBlob];
    timestamp : Int;
  };

  type GalleryItem = {
    id : Text;
    title : Text;
    description : Text;
    category : Text;
    mediaType : Text;
    mediaUrl : Text;
    thumbnailUrl : ?Text;
    videoLength : ?Nat;
    uploadDate : Int;
    seoKeywords : [Text];
    altText : Text;
    tags : [Text];
  };

  type Testimonial = {
    id : Text;
    clientName : Text;
    eventType : Text;
    feedback : Text;
    timestamp : Int;
  };

  module Testimonial {
    public func compareByClientName(a : Testimonial, b : Testimonial) : Order.Order {
      Text.compare(a.clientName, b.clientName);
    };
  };

  module GalleryItem {
    public func compareByCategory(a : GalleryItem, b : GalleryItem) : Order.Order {
      Text.compare(a.category, b.category);
    };
  };

  // Storage
  let contactSubmissions = Map.empty<Principal, ContactSubmission>();
  let bookingSubmissions = Map.empty<Text, BookingSubmission>();
  let galleryItems = Map.empty<Text, GalleryItem>();
  let testimonials = Map.empty<Text, Testimonial>();

  // Gallery Service
  public shared ({ caller }) func addGalleryItem(
    id : Text,
    title : Text,
    description : Text,
    category : Text,
    mediaType : Text,
    mediaUrl : Text,
    thumbnailUrl : ?Text,
    videoLength : ?Nat,
    seoKeywords : [Text],
    altText : Text,
    tags : [Text],
  ) : async () {
    let item : GalleryItem = {
      id;
      title;
      description;
      category;
      mediaType;
      mediaUrl;
      thumbnailUrl;
      videoLength;
      uploadDate = Time.now();
      seoKeywords;
      altText;
      tags;
    };
    galleryItems.add(id, item);
  };

  public query ({ caller }) func getAllGalleryItems() : async [GalleryItem] {
    galleryItems.values().toArray();
  };

  public query ({ caller }) func getGalleryItemsByCategory(category : Text) : async [GalleryItem] {
    galleryItems.values().toArray().filter(
      func(item) { item.category == category }
    );
  };

  public query ({ caller }) func getGalleryItemsByTags(tags : [Text]) : async [GalleryItem] {
    galleryItems.values().toArray().filter(
      func(item) {
        tags.any(
          func(tag) {
            item.tags.any(func(itemTag) { itemTag == tag });
          }
        );
      }
    );
  };

  // Booking Service
  public shared ({ caller }) func submitBooking(
    id : Text,
    fullName : Text,
    email : Text,
    phone : ?Text,
    eventType : Text,
    eventDate : ?Int,
    message : Text,
    referenceFiles : [Storage.ExternalBlob],
  ) : async () {
    if (fullName == "") { Runtime.trap("Full name is required!") };
    if (email == "") { Runtime.trap("Email address is required") };

    let bookingSubmission : BookingSubmission = {
      id;
      fullName;
      email;
      phone;
      eventType;
      eventDate;
      message;
      referenceFiles;
      timestamp = Time.now();
    };
    bookingSubmissions.add(id, bookingSubmission);
  };

  public query ({ caller }) func getAllBookingSubmissions() : async [BookingSubmission] {
    bookingSubmissions.values().toArray();
  };

  public query ({ caller }) func getBookingSubmission(id : Text) : async BookingSubmission {
    switch (bookingSubmissions.get(id)) {
      case (null) { Runtime.trap("Booking request does not exist") };
      case (?bookingSubmission) { bookingSubmission };
    };
  };

  // Testimonials Service
  public shared ({ caller }) func addTestimonial(id : Text, clientName : Text, eventType : Text, feedback : Text) : async () {
    let testimonial : Testimonial = {
      id;
      clientName;
      eventType;
      feedback;
      timestamp = Time.now();
    };
    testimonials.add(id, testimonial);
  };

  public query ({ caller }) func getTestimonial(id : Text) : async Testimonial {
    switch (testimonials.get(id)) {
      case (null) { Runtime.trap("Testimonial does not exist") };
      case (?testimonial) { testimonial };
    };
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public query ({ caller }) func getTestimonialsByClientName(clientName : Text) : async [Testimonial] {
    testimonials.values().toArray().filter(
      func(testimonial) { testimonial.clientName == clientName }
    );
  };

  // CONTACT SERVICE - Map<Principal, ContactSubmission>
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(caller, submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };

  public query ({ caller }) func getMyContactSubmission() : async ContactSubmission {
    switch (contactSubmissions.get(caller)) {
      case (null) { Runtime.trap("Contact submission does exists") };
      case (?contactSubmission) { contactSubmission };
    };
  };
};
