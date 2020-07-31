---
layout: post
title: Add custom filter to RecyclerView
category: Dev
comments: true
tags: [android, development]
---
![Filterable Contact Picker](/public/images/2020/07/multi-contact-picker.png)
One of the most requested enhancements for the [Random Contact App](https://github.com/midhunhk/random-contact) is for a way to filter contacts 
with the custom contact picker that is used in it. Since it seemed like a good reusable component, I added the module 
[MultiContactPicker](https://github.com/midhunhk/lib-aeapps/tree/master/modules/multi-contact/src/main/java/com/ae/apps/lib/multicontact)
along with the rearchitecture of my Andorid library project [lib-aeapps](https://github.com/midhunhk/lib-aeapps).

Lets see how to add a filter for a RecyclerView in an Android app.
<!-- more -->

As you should have guessed, when we apply a filter we would show a subset of the data in the list. From the RecyclerView's point of view, 
the list of data that it has to show has changed - a call to `notifyDataSetChanged()` is to be expected.

And where do we manage the data for a RecyclerView? The backing adapter which extends the class `RecyclerView.Adapter`.

1. The first step is for the adapter to implement the `android.widget.Filterable` class 
```java
  class MyRecyclerViewAdapter extends RecyclerView.Adapter<MyRecyclerViewAdapter.ViewHolder>
        implements Filterable {
          ...
        }
```

2. Next, we create a copy of the source data. But use the filtered list to render the view.
```java
  private final List<ContactInfo> contactInfoList;
  private List<ContactInfo> filteredContacts;

    MyRecyclerViewAdapter(final List<ContactInfo> values) {
        filteredContacts = new ArrayList<>(values);
        contactInfoList = values;
    }
```

3. When we implementing the `Filterable` class, we need to add a method called `getFilter()`. This is where the actual filtering occurs.
The `performFiltering()` method is passed in a search string, and we need to filter the list data based on this. The filtering criteria 
is upto your specific use case. I have added some optimizations so that our friend `notifyDataSetChanged()` is only called when required. And ofcourse when the search string is empty, we copy back the original list.
```java
    @Override
    public Filter getFilter() {
        return new Filter() {
            @Override
            protected FilterResults performFiltering(CharSequence charSequence) {
                boolean dataUpdated = false;
                if (charSequence.length() == 0) {
                    if (filteredContacts.size() < contactInfoList.size()) {
                        filteredContacts = new ArrayList<>(contactInfoList);
                        dataUpdated = true;
                    }
                } else {
                    filteredContacts = filterContactsByName(charSequence.toString().toLowerCase());
                    dataUpdated = true;
                }

                FilterResults filterResults = new FilterResults();
                filterResults.values = dataUpdated;
                return filterResults;
            }

            @Override
            protected void publishResults(CharSequence charSequence, FilterResults filterResults) {
                boolean dataUpdated = Boolean.parseBoolean(filterResults.values.toString());
                if (dataUpdated) {
                    notifyDataSetChanged();
                }
            }
        };
    }
```
4. Next step is to add a `SearchView` to the layout which includes the `RecyclerView`.
```xml
    <androidx.appcompat.widget.SearchView
        android:id="@+id/multiContactSearchView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        app:iconifiedByDefault="false"
        app:queryHint="@string/str_multi_contact_search_hint" />
```

5. And finally in the parent activity or Fragment, we respond to the QueryText of the SearchView. 
Whenever there is a change in text, we simply invoke the `filter()` method on the adapter.
```java
  searchView = findViewById(R.id.multiContactSearchView);
  searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
      @Override
      public boolean onQueryTextSubmit(String query) {
          return false;
      }

      @Override
      public boolean onQueryTextChange(String newText) {
          adapter.getFilter().filter(newText);
          return false;
      }
  });
```

These are all the changes that are required. Pretty much all of the above code except the implementation for `filterContactsByName()` 
is generic and can be re-used for any project. Please reach out to me for any doubts. See the references to the source code hosted on GitHub.

### References
1. [lib-aeapps](https://github.com/midhunhk/lib-aeapps)
2. [MultiContactRecyclerViewAdapter](https://github.com/midhunhk/lib-aeapps/blob/master/modules/multi-contact/src/main/java/com/ae/apps/lib/multicontact/MultiContactRecyclerViewAdapter.java)
3. [Sample App](https://play.google.com/store/apps/details?id=com.ae.apps.lib.sample)